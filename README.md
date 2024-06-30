# 1. student-Grade-Generator.js
used;rl often refers to the readline module, which allows you to read input from the command line
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
if (isNaN(mark) || mark < 0 || mark > 100) {
        rl.question("Wrong choice, What was your mark? ", (mark1) => {
          mark1 = Number(mark1);
Prompt Loop: If the input is invalid, it prompts the user again.

code input
if (mark1 > 79 && mark1 <= 100) {
            console.log("You have an A")
          } else if (mark1 >= 60 && mark1 <= 79) {
            console.log("You have an B")
          } else if (mark1 > 49 && mark1 < 60) {
            console.log("You have an C")
          } else if (mark1 >= 40 && mark1 <= 49) {
            console.log("You have an D")
          } else if (mark1 >= 0 && mark1 < 40) {
            console.log("You have an E")
          } else {
            console.log("Not Gradable")
          }

  code output;
  studentGradeGenerator();

 # 2. speedDetector

 Same as; 
 # student-Grade-Generator.js


 # 3. Net-Salary-Calculator.js
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

# calculating the tax deducted PAYE
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

  # Calculation of NHIF
  function calculateNHIF(grossSalary) {
  if (grossSalary <= 5999) return 150;
  if (grossSalary <= 7999) return 300;
  ........
  if (grossSalary <= 99999) return 1600;
  return 1700;

  
  # Calculation of NSSF
  function calculateNSSF(grossSalary) {
  return grossSalary * 0.06; // 6% of gross salary
}

# Calculation of Housing Levy
function calculateHousingLevy(grossSalary) {
  return grossSalary * 0.015; // 1.5% of gross salary
}

# output
console.log(`Gross Salary: KSh ${result.grossSalary}`);
console.log(`PAYE (Tax): KSh ${result.payee}`);
console.log(`NHIF Deductions: KSh ${result.nhifDeductions}`);
console.log(`NSSF Deductions: KSh ${result.nssfDeductions}`);
console.log(`Housing Levy: KSh ${result.HousingLevy}`);
console.log(`Net Salary: KSh ${result.netSalary}`);

