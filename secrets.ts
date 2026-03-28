import { runSecretScan } from "../src/secretScan";

interface Finding {
  category: string;
  severity: string;
  rule: string;
  message?: string;
}

describe("Secret Scanning Heuristic Rule (File Content)", () => {
  it("creates a HIGH severity security finding when AWS access key exists in file", () => {
    const fileContent = `
export const AWS_ACCESS_KEY_ID = "AKIAIOSFODNN7EXAMPLE";
export const AWS_SECRET_ACCESS_KEY = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY";
export const region = "us-east-1";
`;

    const findings: Finding[] = runSecretScan(fileContent);

    expect(findings).toBeDefined();
    expect(findings.length).toBeGreaterThan(0);

    const finding = findings[0];

    expect(finding.category).toBe("security");
    expect(finding.severity).toBe("high");
    expect(finding.rule).toBeDefined();
    expect(typeof finding.rule).toBe("string");
  });

  it("detects JWT tokens in file content with HIGH severity", () => {
    const fileContent = `
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTUxNjIzOTAyMn0.signature";
`;

    const findings = runSecretScan(fileContent);

    expect(findings.length).toBeGreaterThan(0);
    expect(findings[0].category).toBe("security");
    expect(findings[0].severity).toBe("high");
  });

  it("detects OAuth / Bearer tokens in file content with HIGH severity", () => {
    const fileContent = `
const headers = {
  Authorization: "Bearer ya29.A0ARrdaM-example-oauth-token"
};
`;

    const findings = runSecretScan(fileContent);

    expect(findings.length).toBeGreaterThan(0);
    expect(findings[0].category).toBe("security");
    expect(findings[0].severity).toBe("high");
  });
});
