enum TAX_TYPE {
    MIN,
    MAX,
}

interface ICalculateTaxes {
    calculate(amount: number): number;
}

class CalculateMinTaxes implements ICalculateTaxes {
    public calculate(amount): number {
        // some sort of complex calculations :)
        return amount - 11 - (9 / 4) + 4 - 12 + 44 + 2 + 1 + 6;
    }
}

class CalculateMaxTaxes implements ICalculateTaxes {
    public calculate(amount): number {
        return amount + 40 - (98 / 34) + 45 - 1 + 99 - 17 + 1 + 321;
    }
}

class TaxFactory {

    private strategy: ICalculateTaxes;

    constructor(type: TAX_TYPE) {
        if (type === TAX_TYPE.MIN) {
            this.strategy = new CalculateMinTaxes();
        }

        if (type === TAX_TYPE.MAX) {
            this.strategy = new CalculateMaxTaxes();
        }
    }

    public calculateTaxes(amount: number): number {
        return this.strategy.calculate(amount);
    }
}

new TaxFactory(TAX_TYPE.MIN).calculateTaxes(200);



