import SubmitButton from "../../../../_components/SubmitButton";
import { updateReservation } from "../../../../_lib/actions";
import { getBooking, getCabin } from "../../../../_lib/data-service";

export const metadata = {
  title: "Edit Reservation",
};

export default async function Page({ params }) {
  // const bookingId = params;
  const booking = await getBooking(params.bookingId);
  const { cabinId, id: bookingId, numGuests, observations } = booking;
  const cabin = await getCabin(cabinId);
  const { maxCapacity } = cabin;

  return (
    <div>
      <h2 className="text-2xl font-semibold text-accent-400 mb-7">
        Edit Reservation #{bookingId}
      </h2>

      <form
        action={updateReservation}
        className="flex flex-col gap-6 px-12 py-8 text-lg bg-primary-900"
      >
        <div className="space-y-2">
          <label htmlFor="numGuests">How many guests?</label>
          <select
            name="numGuests"
            defaultValue={numGuests}
            id="numGuests"
            className="w-full px-5 py-3 rounded-sm shadow-sm bg-primary-200 text-primary-800"
            required
          >
            <option value="" key="">
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="observations">
            Anything we should know about your stay?
          </label>
          <textarea
            name="observations"
            defaultValue={observations}
            className="w-full px-5 py-3 rounded-sm shadow-sm bg-primary-200 text-primary-800"
          />
        </div>
        <input type="hidden" name="bookingId" value={bookingId} />

        <div className="flex items-center justify-end gap-6">
          <SubmitButton pendingLabel="Updating...">
            Update reservation
          </SubmitButton>
        </div>
      </form>
    </div>
  );
}
