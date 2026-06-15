/**
 * SERVICIO ESPECIALIZADO DE NOTIFICACIONES
 *
 * Esta clase concentra únicamente el envío de mensajes al cliente.
 * De esta forma, la lógica de inventario queda separada de la lógica de comunicación.
 */

export class NotificationService {

    notifyCustomer(email: string, message: string) {
        console.log(`[Mailer] Enviando correo a ${email}: ${message}`);
    }

}