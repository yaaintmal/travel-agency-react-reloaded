import "cally";

export default function Calendar() {
  return (
    <div className="flex flex-col items-center space-y-4 p-4 mt-4">
      <h2 class="card-title text-2xl font-bold mb-6 text-center">
        Choose your date
      </h2>
      <div>
        <calendar-date class="cally bg-base-100 border border-base-300 shadow-lg rounded-box">
          <svg
            aria-label="Previous"
            className="fill-current size-4"
            slot="previous"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path fill="currentColor" d="M15.75 19.5 8.25 12l7.5-7.5"></path>
          </svg>
          <svg
            aria-label="Next"
            className="fill-current size-4"
            slot="next"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path fill="currentColor" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
          </svg>
          <calendar-month></calendar-month>
        </calendar-date>
      </div>
    </div>
  );
}
