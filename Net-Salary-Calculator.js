function calculateNetSalary(basicSalary, benefits) {
  const grossSalary = basicSalary + benefits;

  // Calculate PAYE (Tax)
  const payee = calculatePAYE(grossSalary);

  // Calculate NHIF deductions
  const nhifDeductions = calculateNHIF(grossSalary);

  // Calculate NSSF deductions
  const nssfDeductions = calculateNSSF(grossSalary);

  // Calculate net Housing Levy
  const HousingLevy = calculateHousingLevy(grossSalary);

  // Calculate net salary
  const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions - HousingLevy;


  return {
    grossSalary,
    payee,
    nhifDeductions,
    nssfDeductions,
    netSalary,
    HousingLevy
  };

}


function calculatePAYE(grossSalary) {
  let payee = 0;

  if (grossSalary <= 24000) {
    payee = grossSalary * 0.1;
  } else if (grossSalary <= 32333) {
    payee = grossSalary * 0.25;
  } else if (grossSalary <= 500000) {
    payee = grossSalary * 0.3;
  } else if (grossSalary <= 800000) {
    payee = grossSalary * 0.325;
  } else {
    payee = grossSalary * 0.35;
  }

  return payee;
}

function calculateNHIF(grossSalary) {
  if (grossSalary <= 5999) return 150;
  if (grossSalary <= 7999) return 300;
  if (grossSalary <= 11999) return 400;
  if (grossSalary <= 14999) return 500;
  if (grossSalary <= 19999) return 600;
  if (grossSalary <= 24999) return 750;
  if (grossSalary <= 29999) return 850;
  if (grossSalary <= 34999) return 900;
  if (grossSalary <= 39999) return 950;
  if (grossSalary <= 44999) return 1000;
  if (grossSalary <= 49999) return 1100;
  if (grossSalary <= 59999) return 1200;
  if (grossSalary <= 69999) return 1300;
  if (grossSalary <= 79999) return 1400;
  if (grossSalary <= 89999) return 1500;
  if (grossSalary <= 99999) return 1600;
  return 1700;
}

function calculateNSSF(grossSalary) {
  return grossSalary * 0.06; // 6% of gross salary
}

function calculateHousingLevy(grossSalary) {
  return grossSalary * 0.015; // 1.5% of gross salary
}

// Example of Someones Salary:
const basicSalary = 700;
const benefits = 10000;

const result = calculateNetSalary(basicSalary, benefits);

console.log(`Gross Salary: KSh ${result.grossSalary}`);
console.log(`PAYE (Tax): KSh ${result.payee}`);
console.log(`NHIF Deductions: KSh ${result.nhifDeductions}`);
console.log(`NSSF Deductions: KSh ${result.nssfDeductions}`);
console.log(`Housing Levy: KSh ${result.HousingLevy}`);
console.log(`Net Salary: KSh ${result.netSalary}`);
