let comptes = [
  { entreprise:"Ets NNano", numero:"676355859", type:"MTN", statut:"ouvert" },
  { entreprise:"Maison Koffi", numero:"651475255", type:"Orange", statut:"fermé" }
];

export default function handler(req, res) {
  if(req.method === "GET"){
    res.status(200).json(comptes);
  } else if(req.method === "POST"){
    const newCompte = req.body;
    comptes.push(newCompte);
    res.status(201).json({ message: "Compte ajouté !" });
  } else {
    res.status(405).json({ message: "Méthode non autorisée" });
  }
}
