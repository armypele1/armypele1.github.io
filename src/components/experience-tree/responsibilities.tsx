export const circadacareResponsibilities = {
  "Data Modelling & Access Control": (
    <div>
      Designed and implemented a
      <strong className="text-primary">
        {" "}
        granular hierarchical RBAC system{" "}
      </strong>{" "}
      spanning organisations, care homes, residents, and family members. Enabled
      secure, fine-grained data access backed by relational integrity in
      PostgreSQL.
    </div>
  ),

  "Backend Overhaul": (
    <div>
      Rebuilt backend services following migration from Firestore to PostgreSQL.
      Consolidated ~50 Cloud Functions and fragmented scheduled jobs into 4
      Cloud Run services. Simplified the monorepo and execution model to{" "}
      <strong className="text-primary">
        improve scalability, observability, and long-term maintainability.
      </strong>
    </div>
  ),

  "Cost Reduction": (
    <div>
      Led load and soak testing of 10,000 mocked IoT devices with zero request
      failures, identified and resolved system bottlenecks, and{" "}
      <strong className="text-primary">
        reduced per-device running costs by ~43%
      </strong>{" "}
      through database, service, and pipeline optimisations.
    </div>
  ),

  "IoT Commissioning System": (
    <div>
      <strong className="text-primary">
        Created a Bluetooth commissioning system
      </strong>{" "}
      in a native app (built with Capacitors and React), streamlining the setup
      process for IoT devices. Deployed to both android and iOS stores.
    </div>
  ),

  "Data pipeline & ML integration": (
    <div>
      Refactored brittle audio processing pipeline into a modular, extensible
      architecture and{" "}
      <strong className="text-primary">
        integrated ONNX-based ML inference within a Dataflow pipeline
      </strong>{" "}
      for sensor calibration and audio analysis.
    </div>
  ),
};

export const advancedResponsibilities = {
  "Test Plans": (
    <div>
      <strong className="text-primary">
        Designed comprehensive test plans
      </strong>{" "}
      for a business management tool.
    </div>
  ),
  "Quality Assurance": (
    <div>
      <strong className="text-primary">Reviewed quality specifications</strong>{" "}
      and provided feedback on areas of potential concern.
    </div>
  ),
};
