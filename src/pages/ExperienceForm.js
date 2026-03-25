import { useState } from 'react';

function ExperienceForm() {
  const [formData, setFormData] = useState({ company: '', years: '' });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log('Experience Submitted:', formData);
    setSubmittedData({ ...formData, submittedAt: new Date().toISOString() });
  };

  return (
    <div>
      <h1 data-testid="page-title">Experience Form</h1>

      <form
        style={{ maxWidth: '420px', margin: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}
        onSubmit={handleSubmit}
        aria-label="Experience Form"
      >
        <label htmlFor="company">Company</label>
        <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} data-testid="company" />

        <label htmlFor="years">Years of Experience</label>
        <input type="text" id="years" name="years" value={formData.years} onChange={handleChange} data-testid="years" />

        <button type="submit" data-testid="save-btn">Save</button>
      </form>

      {submittedData && (
        <div style={{ maxWidth: '420px', margin: '20px auto 0', padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }}>
          <div role="status" aria-live="polite" data-testid="save-status" style={{ fontWeight: 600 }}>
            Saved successfully ✅
          </div>
          <div style={{ marginTop: '10px' }}>
            <div style={{ fontWeight: 600, marginBottom: '6px' }}>Submitted payload</div>
            <pre data-testid="submitted-json" style={{ whiteSpace: 'pre-wrap', margin: 0 }}>
              {JSON.stringify(submittedData, null, 2)}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}

export default ExperienceForm;
