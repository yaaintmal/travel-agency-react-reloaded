export default function AboutUs() {
  return (
    <div>
      <div className="collapse bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-1" defaultChecked />
        <div className="collapse-title font-semibold">About Us</div>
        <div className="collapse-content text-sm">
          We exist so you don't have to spend a Saturday night trying to figure
          out the difference between a layover and a stopover. Our mission is to
          make your vacation so effortless, the biggest decision you have to
          make is what kind of tiny shampoo bottle to steal from the hotel.
          We're not just travel agents; we're problem-solvers. Specifically, we
          solve the problem of you accidentally booking a flight to a city that
          exists only in your dreams.
        </div>
      </div>
      <div className="collapse bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-semibold">Who We Are</div>
        <div className="collapse-content text-sm">
          <ul>
            <li>
              We believe your only job on vacation is to relax and take photos
              of your food.
            </li>
            <li>
              Our founder once got lost in their own neighborhood. They decided
              to open a travel agency so it would never happen to anyone else.
            </li>
            <li>
              We've seen things... things like the 14th browser tab you left
              open with a half-researched itinerary. We're here to close those
              tabs for you.
            </li>
            <li>Our motto: "Go somewhere. We'll handle the paperwork."</li>
          </ul>
        </div>
      </div>
      <div className="collapse bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title font-semibold">Our Origin Story</div>
        <div className="collapse-content text-sm">
          It all started with a misplaced passport and a very persistent
          squirrel. We won't get into the details, but let's just say we decided
          that no one should ever face that kind of travel chaos alone. We are
          your human shields against the madness of airport security lines and
          the tyranny of baggage fees. Let us handle the chaos, so you can focus
          on the fun.
        </div>
      </div>
    </div>
  );
}
