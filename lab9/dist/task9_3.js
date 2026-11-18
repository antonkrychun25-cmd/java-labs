"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Pending"] = "PENDING";
    OrderStatus["Processing"] = "PROCESSING";
    OrderStatus["Shipped"] = "SHIPPED";
    OrderStatus["Delivered"] = "DELIVERED";
    OrderStatus["Cancelled"] = "CANCELLED";
})(OrderStatus || (OrderStatus = {}));
function updateOrderStatus(order, newStatus) {
    order.status = newStatus;
    console.log(`Замовлення #${order.id} змінило статус на: ${order.status}`);
}
const myOrder = {
    id: "ORD-9921",
    customer: "Антон Кричун",
    status: OrderStatus.Pending
};
updateOrderStatus(myOrder, OrderStatus.Processing);
updateOrderStatus(myOrder, OrderStatus.Shipped);
