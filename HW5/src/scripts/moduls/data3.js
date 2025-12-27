export const hotels = [
{
    id: 1,
    name: "Hotel Sea Crown",
    rating: 4.8,
    reviews: 122,
    price: 150,
    features: ["Beach View", "All Inclusive", "Spa"],
    color: "#4ECDC4"
},
{
    id: 2,
    name: "Long Beach Hotel",
    rating: 4.8,
    reviews: 122,
    price: 150,
    features: ["Beach Access", "Breakfast", "Parking"],
    color: "#FFD166"
},
{
    id: 3,
    name: "Majestic Maldives",
    rating: 4.8,
    reviews: 122,
    price: 150,
    features: ["Private Beach", "Luxury Villa", "Butler Service"],
    color: "#06D6A0"
},
{
    id: 4,
    name: "Breathtaking Bali",
    rating: 4.8,
    reviews: 122,
    price: 150,
    features: ["Yoga Classes", "Spa", "Cultural Tours"],
    color: "#118AB2"
}
];

// Данные checkout (для страницы 2)
export const checkoutData = {
cart: [
    {
    id: 1,
    name: "Warsaw Day Tour",
    price: 20.00,
    quantity: 1,
    rating: 5.0,
    reviews: 234
    }
],
shippingInfo: {
    firstName: "",
    lastName: "",
    address: "",
    address2: ""
},
paymentMethod: "paypal"
};

// Данные бронирования (для страницы 3)
export const bookingData = {
bookingId: "KU_H85DM",
tourName: "Warsaw Day Tour",
rating: 5.0,
reviews: 234,
departureDate: "June 21, 2024",
guests: 2,
bookingDate: new Date().toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
}),
total: 357.00,
paymentMethod: "PayPal",
status: "confirmed",
itinerary: [
    { time: "09:00", activity: "Hotel Pickup" },
    { time: "10:00", activity: "City Tour Start" },
    { time: "13:00", activity: "Lunch Break" },
    { time: "15:00", activity: "Museum Visit" },
    { time: "18:00", activity: "Return to Hotel" }
],
contact: {
    email: "customer@example.com",
    phone: "+1 (234) 567-8900"
}
};

// Общие переменные
export let favorites = [];
export let bookings = [];
export let userBookings = [];
export let orderHistory = [];

// Константы
export const IMAGE_GREY_COLOR = '#D3D3D3';