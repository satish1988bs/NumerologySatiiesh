import path, { join } from "path";
import "dotenv/config";
import * as express from "express";
import express__default from "express";
import cors from "cors";
import { existsSync, readFileSync, writeFileSync } from "fs";
const handleDemo = (req, res) => {
  const response = {
    message: "Hello from Express server"
  };
  res.status(200).json(response);
};
const REGISTRATIONS_FILE = join(process.cwd(), "registrations.json");
const readRegistrations = () => {
  if (!existsSync(REGISTRATIONS_FILE)) {
    return [];
  }
  try {
    const data = readFileSync(REGISTRATIONS_FILE, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading registrations:", error);
    return [];
  }
};
const saveRegistrations = (registrations) => {
  try {
    writeFileSync(REGISTRATIONS_FILE, JSON.stringify(registrations, null, 2));
  } catch (error) {
    console.error("Error saving registrations:", error);
    throw error;
  }
};
const handleRegisterAppointment = (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      dateOfBirth,
      timeOfBirth,
      placeOfBirth,
      service,
      additionalNotes,
      submittedAt
    } = req.body;
    if (!fullName || !email || !phone || !dateOfBirth || !placeOfBirth || !service) {
      return res.status(400).json({
        error: "Missing required fields: fullName, email, phone, dateOfBirth, placeOfBirth, service"
      });
    }
    const id = `REG_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const registration = {
      id,
      fullName,
      email,
      phone,
      dateOfBirth,
      timeOfBirth: timeOfBirth || "",
      placeOfBirth,
      service,
      additionalNotes: additionalNotes || "",
      submittedAt: submittedAt || (/* @__PURE__ */ new Date()).toISOString()
    };
    const registrations = readRegistrations();
    registrations.push(registration);
    saveRegistrations(registrations);
    console.log(`New appointment registration: ${fullName} (${email}) - ${service}`);
    res.status(200).json({
      success: true,
      message: "Registration successful",
      registrationId: id
    });
  } catch (error) {
    console.error("Error processing registration:", error);
    res.status(500).json({
      error: "Internal server error"
    });
  }
};
const handleGetRegistrations = (req, res) => {
  try {
    const registrations = readRegistrations();
    res.status(200).json({
      success: true,
      registrations,
      total: registrations.length
    });
  } catch (error) {
    console.error("Error fetching registrations:", error);
    res.status(500).json({
      error: "Internal server error"
    });
  }
};
function createServer() {
  const app2 = express__default();
  app2.use(cors());
  app2.use(express__default.json());
  app2.use(express__default.urlencoded({ extended: true }));
  app2.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });
  app2.get("/api/demo", handleDemo);
  app2.post("/api/register-appointment", handleRegisterAppointment);
  app2.get("/api/registrations", handleGetRegistrations);
  return app2;
}
const app = createServer();
const port = process.env.PORT || 3e3;
const __dirname = import.meta.dirname;
const distPath = path.join(__dirname, "../spa");
app.use(express.static(distPath));
app.get("*", (req, res) => {
  if (req.path.startsWith("/api/") || req.path.startsWith("/health")) {
    return res.status(404).json({ error: "API endpoint not found" });
  }
  res.sendFile(path.join(distPath, "index.html"));
});
app.listen(port, () => {
  console.log(`🚀 Fusion Starter server running on port ${port}`);
  console.log(`📱 Frontend: http://localhost:${port}`);
  console.log(`🔧 API: http://localhost:${port}/api`);
});
process.on("SIGTERM", () => {
  console.log("🛑 Received SIGTERM, shutting down gracefully");
  process.exit(0);
});
process.on("SIGINT", () => {
  console.log("🛑 Received SIGINT, shutting down gracefully");
  process.exit(0);
});
//# sourceMappingURL=node-build.mjs.map
