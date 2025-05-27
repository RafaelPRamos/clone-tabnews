const { execSync } = require("child_process");

const allowedBranches = ["develop", "uat", "main"];

try {
  const branch = execSync("git rev-parse --abbrev-ref HEAD").toString().trim();

  if (!allowedBranches.includes(branch)) {
    console.log(`Branch "${branch}" não permitida para deploy.`);
    process.exit(0); // Ignora o build
  } else {
    console.log(`Branch "${branch}" permitida. Prosseguindo com o build.`);
    process.exit(1); // Prossegue com o build
  }
} catch (error) {
  console.error("Erro ao verificar a branch:", error);
  process.exit(1);
}
