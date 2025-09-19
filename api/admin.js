const codeAdmin = "233233";

export default function handler(req, res) {
  if(req.method === "POST") {
    const { code } = req.body;
    if(code === codeAdmin){
      res.status(200).json({ message: "Accès admin OK" });
    } else {
      res.status(401).json({ message: "Code incorrect" });
    }
  } else {
    res.status(405).json({ message: "Méthode non autorisée" });
  }
}
