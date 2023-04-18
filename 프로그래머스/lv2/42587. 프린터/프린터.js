function solution(priorities, location) {
    let queue = priorities.map((priority, index) => ({ priority, index }));
    let count = 0;
    while (queue.length > 0) {
        let current = queue.shift();
        if (queue.find((document) => document.priority > current.priority)) {
            queue.push(current);
        continue;
        } 
        count++;
        if(current.index === location){
            return count;
        }
}
}
