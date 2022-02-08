import sgMail from "@sendgrid/mail";

const submitFormData = (req, res) => {
  const SEND_GRID_KEY = process.env.SENDGRID_KEY;
  sgMail.setApiKey(SEND_GRID_KEY);

  const { formInfo } = req.body;
  const {
    name,
    email,
    mobile,
    budget,
    destination,
    reason,
    excrusion,
    guide,
    from,
    to,
  } = formInfo;

  if (req.method === "POST") {
    const msg = {
      to: "welcome@travel-life.ml", // Change to your recipient
      from: "welcome@travel-life.ml", // Change to your verified sender
      subject: "New Travel Inquiry",
      html: `<ul>
        <li>Name: ${name}</li>
        <li>Email: ${email}</li>
        <li>Mobile: ${mobile}</li>
        <li>Budget: ${budget}</li>
        <li>Destination: ${destination}</li>
        <li>Reason: ${reason}</li>
        <li>Excrusion: ${excrusion}</li>
        <li>Guide: ${guide}</li>
        <li>From: ${from}</li>
        <li>To: ${to}</li>
      </ul>`,
    };
    sgMail
      .send(msg)
      .then(() => {
        console.log("Email sent");
        return res.status(200).json({ msg: "email sent" });
      })
      .catch((error) => {
        console.error(error);
        return res.status(400).json({ error });
      });
  }
};

export default submitFormData;
