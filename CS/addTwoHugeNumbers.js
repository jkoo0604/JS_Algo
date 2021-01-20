/*
You're given 2 huge integers represented by linked lists. Each linked list element is a number from 0 to 9999 that represents a number with exactly 4 digits. The represented number might have leading zeros. Your task is to add up these huge integers and return the result in the same format.

Example

For a = [9876, 5432, 1999] and b = [1, 8001], the output should be
addTwoHugeNumbers(a, b) = [9876, 5434, 0].

Explanation: 987654321999 + 18001 = 987654340000.

For a = [123, 4, 5] and b = [100, 100, 100], the output should be
addTwoHugeNumbers(a, b) = [223, 104, 105].

Explanation: 12300040005 + 10001000100 = 22301040105.
*/

// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function addTwoHugeNumbers(a, b) {
    if (!a && !b) return null;
    if (!a) return b;
    if (!b) return a;
    
    let numA = '', numB = '', numRes = '', head, curr;
    
    let currA = a, currB = b;
    
    while (currA || currB) {
        if (currA) {
            let tempA = currA.value.toString();
            while (tempA.length < 4) {
                tempA = '0' + tempA;
            }
            numA += tempA;
            currA = currA.next;
        }
        if (currB) {
            let tempB = currB.value.toString();
            while (tempB.length < 4) {
                tempB = '0' + tempB;
            }
            numB += tempB;
            currB = currB.next;
        }
    }
    
    // numRes = (parseInt(numA) + parseInt(numB)).toString();
    let idxA = numA.length - 1;
    let idxB = numB.length - 1;
    let carry = 0;
    
    while (idxA >=0 || idxB >= 0) {
        let tempDigit;
        if (idxB < 0) {
            tempDigit = parseInt(numA[idxA]) + carry;
        } else if (idxA < 0) {
            tempDigit = parseInt(numB[idxB]) + carry;
        } else {
            tempDigit = parseInt(numA[idxA]) + parseInt(numB[idxB]) + carry;
        }
        if (tempDigit > 9) {
            tempDigit = tempDigit % 10;
            carry = 1;
        } else {
            carry = 0;
        }
        numRes = (tempDigit).toString() + numRes;
        idxA--;
        idxB--;
    }
    if (carry > 0) {
        numRes = carry.toString() + numRes;
    }
    console.log(numRes);
    
    let firstLen = numRes.length % 4 === 0 ? 4 : numRes.length % 4;
    head = new ListNode(parseInt(numRes.slice(0, firstLen)));
    curr = head;
    let i = firstLen;
    
    while (i < numRes.length) {
        let newVal = parseInt(numRes.slice(i, i + 4));
        let newNode = new ListNode(newVal);
        curr.next = newNode;
        curr = curr.next;
        i += 4;
    }
    
    return head;
}
