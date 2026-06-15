import { ProductBloc } from './product-bloc';
import { NotificationService } from './notification-service';

const productBloc = new ProductBloc();
const notificationService = new NotificationService();

const product = { id: 1, name: 'Café orgánico' };

productBloc.saveProduct(product);
productBloc.loadProduct(product.id);
notificationService.notifyCustomer('cliente@reserva.com', `El producto ${product.name} fue registrado correctamente.`);