import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  isQcProbe,
  KEPT_SIGNATURE_ID,
  probeOnlyRewrite,
  QC_PROBE_ID,
  QC_PROBE_ID_QA_HELPER,
  QC_PROBE_NAME,
  QC_PROBE_NAME_QA_HELPER,
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

const qaHelper: Signature = {
  id: QC_PROBE_ID_QA_HELPER,
  name: "Test QA Helper",
  community: "Buckeystown",
  note: "Researcher QC probe",
  createdAt: "2026-09-19T12:00:00.000Z",
};

const nick: Signature = {
  id: KEPT_SIGNATURE_ID,
  name: "Nicholas Markoff",
  community: "Buckeystown",
  note: "Let’s make our candidates actually compete for our vote and represent our mandate!",
  createdAt: "2026-09-19T04:30:54.165Z",
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

  it("matches Test QA Helper by id and by name", () => {
    assert.equal(isQcProbe(qaHelper), true);
    assert.equal(isQcProbe({ id: "other", name: "TEST QA HELPER" }), true);
    assert.equal(isQcProbe({ id: QC_PROBE_ID_QA_HELPER, name: "Someone Else" }), true);
    assert.equal(QC_PROBE_NAME_QA_HELPER, "test qa helper");
  });

  it("keeps Nicholas Markoff and only drops the probes", () => {
    assert.equal(isQcProbe(nick), false);
    assert.deepEqual(withoutQcProbes([probe, qaHelper, nick]), [nick]);
    assert.deepEqual(probeOnlyRewrite([probe, qaHelper, nick]), [nick]);
    assert.deepEqual(probeOnlyRewrite([nick]), [nick]);
  });

  it("drops a lone probe to [] but never wipes a store that still has real rows", () => {
    assert.deepEqual(probeOnlyRewrite([probe]), []);
    assert.deepEqual(probeOnlyRewrite([qaHelper]), []);
    assert.deepEqual(withoutQcProbes([probe, qaHelper, neighbor]), [neighbor]);
  });
});
