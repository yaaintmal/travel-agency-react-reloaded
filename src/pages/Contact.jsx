import Calendar from "../components/Calendar";
import BookingForm from "../components/BookingForm";

export default function Contact() {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <BookingForm />
        <Calendar />
      </div>
      <button className="btn btn-primary justify-center">Book</button>
    </div>
  );
}
