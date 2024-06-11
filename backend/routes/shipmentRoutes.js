import { Router } from 'express';

const router = Router();

router.get('/shipment', (req, res) => {
  const shipmentData = {
    shipmentId: "001",
    status: "In Transit",
    estimatedDelivery: "2024-05-10",
    origin: "London",
    destination: "Manchester"
  }
  res.json(shipmentData);
});

export default router;
