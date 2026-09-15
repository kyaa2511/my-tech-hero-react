export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container about-grid">
        <div>
          <span className="eyebrow">Why My Tech Hero?</span>
          <h2>Tech support should feel human.</h2>
          <p>
            Technology is supposed to save time. But when an account gets locked,
            Wi-Fi stops working, a device won’t connect, or a setting disappears,
            it can quickly become the most annoying part of your day.
          </p>
          <p>
            My Tech Hero is built around patient, respectful support. We solve the
            immediate problem, explain what happened in plain English, and help you
            feel more comfortable with your technology afterward.
          </p>
        </div>

        <aside className="promise-panel">
          <span className="panel-kicker">The My Tech Hero promise</span>
          <ul>
            <li>Clear explanations without unnecessary jargon</li>
            <li>Respectful help at your pace</li>
            <li>Practical recommendations, not upselling</li>
            <li>Privacy and security treated seriously</li>
            <li>A focus on teaching, not just fixing</li>
          </ul>
        </aside>
      </div>
    </section>
  )
}
