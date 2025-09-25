export default function BookingForm() {
  return (
    <div class="card bg-base-100 shadow-xl p-8 max-w-lg mx-auto ">
      <h2 class="card-title text-2xl font-bold mb-6 text-center">Booking</h2>
      <form>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div class="form-control">
            <label class="label">
              <span class="label-text">First Name</span>
            </label>
            <input
              type="text"
              placeholder="Travel"
              class="input input-bordered w-full"
              required
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Last Name</span>
            </label>
            <input
              type="text"
              placeholder="Joe"
              class="input input-bordered w-full"
              required
            />
          </div>
        </div>
        <div class="form-control mb-4">
          <label class="label">
            <span class="label-text">Email Address</span>
          </label>
          <input
            type="email"
            placeholder="skysdalimit@whatajourney.com"
            class="input input-bordered"
            required
          />
        </div>
        <div class="form-control mb-4">
          <label class="label">
            <span class="label-text">Destination</span>
          </label>
          <select class="select select-bordered w-full">
            <option disabled selected>
              Select a destination
            </option>
            <option>Paris, France</option>
            <option>Tokyo, Japan</option>
            <option>Berlin, Germany</option>
            <option>Suprise me, Space</option>
          </select>
        </div>
        {/* <div class="grid grid-cols-2 gap-4 mb-6">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Departure Date</span>
            </label>
            <input type="date" class="input input-bordered" required />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Return Date</span>
            </label>
            <input type="date" class="input input-bordered" required />
          </div>
        </div> */}
        <div class="form-control mb-6">
          <label class="label">
            <span class="label-text">Number of Travelers</span>
          </label>
          <input
            type="number"
            placeholder="1"
            class="input input-bordered"
            min="1"
            required
          />
        </div>
        {/* <div class="card-actions justify-center">
          <button class="btn btn-primary btn-block">Confirm Booking</button>
        </div> */}
      </form>
    </div>
  );
}
