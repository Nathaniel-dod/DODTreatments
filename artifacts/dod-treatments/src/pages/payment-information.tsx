import { LegalPage } from '@/components/LegalPage';

export default function PaymentInformation() {
  return (
    <LegalPage
      title="Payment Information"
      description="Cash pricing, credit-card price adjustments, and payment arrangements for treatments and rooms."
      path="/payment-information"
      updated="September 16, 2026"
    >
      <p>
        All prices displayed on this website are based on payment in cash. Where a price is
        marked “from,” it is a starting rate, not a guaranteed final total.
      </p>

      <h2>Pricing changes</h2>
      <p>
        All pricing is subject to change, and changes may not be reflected on this website.
        Please confirm current room and treatment rates with the team before booking or
        making payment arrangements.
      </p>

      <h2>Cash prices</h2>
      <p>
        Advertised treatment and room rates are cash prices. DOD5Star room rates are listed
        in USD per night. Please confirm your selected room, treatments, availability, and
        final total with the team before making payment arrangements.
      </p>

      <h2>Credit-card payments</h2>
      <p>
        Credit cards are accepted, but credit-card prices are higher than the advertised
        cash prices. The price increase varies by treatment or room; there is no single
        adjustment listed for all services. Ask the team for the credit-card total for
        your selected treatments or accommodation before agreeing to pay.
      </p>
      <p>
        Any applicable credit-card price adjustment will be disclosed before payment and
        must comply with applicable law and payment-network requirements.
      </p>

      <h2>No payments on this website</h2>
      <p>
        We do not accept or process payments through this website. There is no online
        checkout. Inquiry forms are for questions and arranging your stay or treatment only;
        submitting a form does not charge you or confirm a paid booking.
      </p>
      <p>
        Payment arrangements are made directly with the team or the provider responsible
        for your service. Do not submit credit-card numbers or other payment details
        through website forms.
      </p>

      <h2>Confirm your arrangements</h2>
      <p>
        Before paying, confirm the final price, currency, payment method, and any applicable
        booking, cancellation, or refund terms with your provider.
      </p>
      <p>
        For DOD5Star payment questions, call Dr. Darrell Wolfe at{' '}
        <a href="tel:1-469-861-9454">1-469-861-9454</a> or toll-free at{' '}
        <a href="tel:1-855-900-4544">1-855-900-4544</a>, extension 5.
      </p>
    </LegalPage>
  );
}