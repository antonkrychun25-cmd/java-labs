enum OrderStatus {
    Pending = "PENDING",
    Processing = "PROCESSING",
    Shipped = "SHIPPED",
    Delivered = "DELIVERED",
    Cancelled = "CANCELLED"
}

type OrderID = number | string;

interface Order {
    id: OrderID;
    customer: string;
    status: OrderStatus;
}

function updateOrderStatus(order: Order, newStatus: OrderStatus): void {
    order.status = newStatus;
    console.log(`Замовлення #${order.id} змінило статус на: ${order.status}`);
}

const myOrder: Order = {
    id: "ORD-9921",
    customer: "Антон Кричун",
    status: OrderStatus.Pending
};

updateOrderStatus(myOrder, OrderStatus.Processing);
updateOrderStatus(myOrder, OrderStatus.Shipped);