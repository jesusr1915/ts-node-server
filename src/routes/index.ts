import { Router } from "express";

const router: Router = Router();

router.get("/status", (req, res) =>
  res.send({
    status: "01",
    message: "server online",
    date: new Date(),
  })
);

export default router;
