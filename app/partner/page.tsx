export default function PartnerPage() {
  return (
    <main className="form-page">
      <section className="form-hero">
        <p className="eyebrow">Become a Partner</p>
        <h1>Partnership enquiry form</h1>
        <p>For sponsors, collaborators, media partners, exhibitors, and community partners.</p>
      </section>
      <form className="form-card">
        <div className="form-grid">
          <label>Company Name<input type="text" /></label>
          <label>Website<input type="url" /></label>
          <label>Industry<input type="text" /></label>
          <label>Full Name<input type="text" /></label>
          <label>Designation<input type="text" /></label>
          <label>Contact Number<input type="tel" /></label>
          <label>Email Address<input type="email" /></label>
          <label>Partnership Type<input type="text" /></label>
        </div>
      </form>
    </main>
  );
}
