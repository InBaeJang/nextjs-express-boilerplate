import { Router } from 'express';
const router = Router();

router.get("/", (req, res) => {
  res.send("Api Hello World!")
})

export default router;