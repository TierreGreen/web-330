/**
 * ========================================================
 * Title: finance calculator JS
 * Author: Professor Richard Krasso
 * Modified By: Tierre Green
 * Date: April 25, 2021
 * Description: Finance calculator js to be passed to the index file
 * ========================================================
 */

//Finance calculator class to be exported
export class FinanceCalculator {
    static Months_IN_YEAR = 12
    static calculatorFutureValue(monthlyPayment, rate, years) {

        let month = years / FinanceCalculator.Months_IN_YEAR;
        let interestRate = 1 + rate / 100;
        let presentValue = monthlyPayment * month;
        let futureValue = presentValue * (Math.pow(interestRate, month));

        return futureValue.toFixed(2);
    }

// currency conversion
    static convertToCurrency(field){ 
        let currencyFormatter = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        });

        return currencyFormatter.format(field);
    }
    
}