import { useState } from 'react';

function MainForm() {
  const [formData, setFormData] = useState({
    firstname: '',
    middlename: '',
    lastname: '',
    gender: 'Male',
    dob: '',
    state: '',
    country: '',
    pincode: '',
    phone: '',
    email: '',
    comments: '',
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Keep console logging for debugging, but also show a UI confirmation for automation assertions
    // eslint-disable-next-line no-console
    console.log('MainForm Submitted:', formData);
    setSubmittedData({ ...formData, submittedAt: new Date().toISOString() });
  };

  const formStyle = {
    maxWidth: '520px',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  };

  return (
    <div>
      <h1 data-testid="page-title">Main Form</h1>

      <form style={formStyle} onSubmit={handleSubmit} aria-label="Main Form">
        <label htmlFor="lastname">Last Name</label>
        <input type="text" id="lastname" name="lastname" value={formData.lastname} onChange={handleChange} data-testid="lastname" />

        <label htmlFor="gender">Gender</label>
        <select id="gender" name="gender" value={formData.gender} onChange={handleChange} data-testid="gender">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <label htmlFor="dob">Date of Birth</label>
        <input type="text" id="dob" name="dob" placeholder="DD/MM/YYYY" value={formData.dob} onChange={handleChange} data-testid="dob" />

        <label htmlFor="state">State</label>
        <select id="state" name="state" value={formData.state} onChange={handleChange} data-testid="state">
          <option value="">Select state</option>
          <option value="Tamilnadu">Tamilnadu</option>
          <option value="Karnataka">Karnataka</option>
        </select>

        <label htmlFor="country">Country</label>
        <select id="country" name="country" value={formData.country} onChange={handleChange} data-testid="country">
          <option value="">Select country</option>
          <option value="India">India</option>
          <option value="Singapore">Singapore</option>
        </select>

        <label htmlFor="pincode">Pincode</label>
        <input type="text" id="pincode" name="pincode" value={formData.pincode} onChange={handleChange} data-testid="pincode" />

        <label htmlFor="phone">Telephone</label>
        <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} data-testid="phone" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} data-testid="email" />

        <label htmlFor="comments">Comments</label>
        <textarea id="comments" name="comments" value={formData.comments} onChange={handleChange} placeholder="Enter comments" data-testid="comments" />

        <label htmlFor="firstname">First Name</label>
        <input type="text" id="firstname" name="firstname" value={formData.firstname} onChange={handleChange} data-testid="firstname" />

        <label htmlFor="middlename">Middle Name</label>
        <input type="text" id="middlename" name="middlename" value={formData.middlename} onChange={handleChange} data-testid="middlename" />

        <button type="submit" data-testid="save-btn">Save</button>
      </form>

      {submittedData && (
        <div style={{ maxWidth: '520px', margin: '20px auto 0', padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }}>
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

export default MainForm;
