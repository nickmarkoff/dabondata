import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  isQcProbe,
  QC_PROBE_ID,
  QC_PROBE_NAME,
  withoutQcProbes,
  type Signature,
} from "../lib/signatures.ts";

const probe: Signature = {
  id: QC_PROBE_ID,
  name: "Gus QC Probe",
  community: "Adamstown",
  note: "post-redeploy blob check",
  createdAt: "2026-09-19T04:00:56.091Z",
};

const neighbor: Signature = {
  id: "real-neighbor",
  name: "Jane Doubs",
  community: "Doubs",
  createdAt: "2026-09-19T04:10:00.000Z",
};

describe("QC probe filter", () => {
  it("matches the live Blob probe by id and by name", () => {
    assert.equal(isQcProbe(probe), true);
    assert.equal(isQcProbe({ id: "other", name: "Gus QC Probe" }), true);
    assert.equal(isQcProbe({ id: QC_PROBE_ID, name: "Someone Else" }), true);
    assert.equal(QC_PROBE_NAME, "gus qc probe");
  });

  it("drops the probe and keeps real names", () => {
    assert.deepEqual(withoutQcProbes([probe, neighbor]), [neighbor]);
    assert.deepEqual(withoutQcProbes([probe]), []);
  });
});
