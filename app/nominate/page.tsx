export default function NominatePage() {
  return (
    <main className="form-page">
      <section className="form-hero">
        <p className="eyebrow">Nominate Now</p>
        <h1>Award nomination form</h1>
        <p>Use this page for self-nominations or to nominate someone whose work deserves national recognition.</p>
      </section>
      <form className="form-card">
        <div className="form-grid">
          <label>Full Name<input type="text" /></label>
          <label>Gender<input type="text" /></label>
          <label>Date of Birth<input type="date" /></label>
          <label>Contact Number<input type="tel" /></label>
          <label>Email Address<input type="email" /></label>
          <label>City / State / Country<input type="text" /></label>
          <label>Profession / Industry<input type="text" /></label>
          <label>Organization Name<input type="text" /></label>
          <label>Designation<input type="text" /></label>
          <label>Category Applying For<input type="text" /></label>
          <label>Self or Others<input type="text" /></label>
        </div>
      </form>
    </main>
  );
}
