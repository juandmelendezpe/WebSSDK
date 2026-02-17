import { Resend } from "resend"
import { NextRequest, NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, service, message } = await request.json()

    // Validar que todos los campos requeridos estén presentes
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: "Faltan campos requeridos" },
        { status: 400 }
      )
    }

    const result = await resend.emails.send({
      from: "STATUS SDK <onboarding@resend.dev>",
      to: "juanmelendez.pe@gmail.com",
      replyTo: email,
      subject: `Nuevo mensaje de contacto de ${name} - ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Nuevo mensaje de contacto</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          ${company ? `<p><strong>Empresa:</strong> ${company}</p>` : ""}
          <p><strong>Servicio:</strong> ${service}</p>
          <h3>Mensaje:</h3>
          <p>${message.replace(/\n/g, "<br>")}</p>
          <hr style="border: none; border-top: 1px solid #ccc; margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">Este email fue enviado desde el formulario de contacto de STATUS SDK</p>
        </div>
      `,
    })

    if (result.error) {
      console.error("Error al enviar email:", result.error)
      return NextResponse.json(
        { error: "Error al enviar el email" },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { 
        success: true, 
        message: "Email enviado exitosamente",
        id: result.data.id 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error en la ruta de email:", error)
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    )
  }
}
