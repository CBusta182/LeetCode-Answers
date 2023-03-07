var addTwoNumbers = function(l1, l2) {
    // create a dummy node to ensure we have something to point to
    let node = new ListNode();
    // create a pointer to where we are in the LinkedList
    let currentPos = node;

    let remainder = 0;
    while( l1 || l2 || remainder !== 0 ) {
        // if list 1 or 2 has a value, use those values, otherwise, set num1 or 2 to 0;
        let num1 = l1 ? l1.val : 0;
        let num2 = l2 ? l2.val : 0;

        // calculate the sum
        let result = num1 + num2 + remainder;
        // I round down the remainder so we are dealing with whole numbers only.
        remainder = Math.floor( result / 10 );
        // I use the modulous operand to only get the 1s digit of the summation
        result = result % 10;

        // update the pointer
        currentPos.next = new ListNode( result );
        currentPos = currentPos.next;

        // if list 1 or 2 still exist, set them to the next node in the linked list, otherwise, set them to null;
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }

    return node.next;
};
