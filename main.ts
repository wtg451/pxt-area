
/**
 * 使用這個文件來定義自訂的函式和積木。
 * 進一步了解：https://makecode.microbit.org/blocks/custom
 */

enum numOption {
    //% block="四捨五入"
    round,
    //% block="允許小數"
    float
}

/**
 * 自訂的積木
 */
//% weight=100 color=#fcba03 icon="\uf0ad" block="面積"
namespace areaCaculator {

    //% blockId="areaOfTriangle" block="取得三角形面積:底: %base|高: %height |選項: %myOpt"
    //% base.min=0 base.max=100 height.min=20 height.max=1000
    //% weight=0
    export function areaOfTriangle(base: number, height: number, myOpt: numOption): number {
        if (myOpt == numOption.float)
            return base * height / 2;
        else
            return Math.round(base * height / 2);
    }
    //% blockId="showAreaOfTriangle" block="LED顯示三角形面積:底: %base|高: %height |選項: %myOpt"
    //% base.min=0 base.max=100 height.min=20 height.max=1000
    //% weight=100
    export function showAreaOfTriangle(base: number, height: number, myOpt: numOption): void {
        let myNum=0
        if (myOpt == numOption.float)
            myNum = base * height / 2;
        else
            myNum = Math.round(base * height / 2);
        basic.showNumber(myNum);
    }
    /**
     * TODO: 在此描述函式
     * @param value 在此描述值, eg: 5
     */
    //% block
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value - 1) + fib(value - 2);
    }
}
