const graph = {};
graph.a = ["b", "c"];
graph.b = ["f"];
graph.c = ["d", "e"];
graph.d = ["f"];
graph.e = ["f"];
graph.f = ["g"];

/* 
{
    a: [ 'b', 'c' ],
    b: [ 'f' ],
    c: [ 'd', 'e' ],
    d: [ 'f' ],
    e: [ 'f' ],
    f: [ 'g' ]
  }
*/

// Поиск в ширину
const bfs = (graph, start, end) => {
    let queue = [];
    queue.push(start);

    while (queue.length) {
        const current = queue.shift();

        if (!graph[current]) {
            graph[current] = [];
        }
        if (graph[current].includes(end)) {
            return true;
        } else {
            queue = [...queue, ...graph[current]];
        }
    }
    return false;
};

// Поиск в глубину
function dfs(graph, start) {
    const stack = [start];
    const visited = new Set();
    const result = [];

    while (stack.length) {
        const current = stack.pop();
        if (!graph[current]) {
            graph[current] = [];
        }
        if (!visited.has(current)) {
            visited.add(current);
            result.push(current);

            for (let neighbor of graph[current]) {
                stack.push(neighbor);
            }
        }
    }

    return result;
}

console.log(dfs(graph, "a"));
