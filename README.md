# benchmarks

Under extremely heavy load with 100 constant listeners @tbnritzdoge/events outperforms any other emitter

```
drip x 513,731 ops/sec ±0.60% (95 runs sampled)
native x 491,991 ops/sec ±0.95% (96 runs sampled)
eventemitter3 x 460,119 ops/sec ±0.17% (96 runs sampled)
@tbnritzdoge/events x 1,270,677 ops/sec ±0.23% (95 runs sampled)
```

![bench](https://edge.doge.bio/bar/eyJ0aXRsZSI6Im9wL3MgaGlnaGVyIGlzIGJldHRlciIsImxlZ2VuZCI6W3sibmFtZSI6ImRyaXAiLCJjb2xvciI6LTEyNjg0MDgzMjF9LHsibmFtZSI6IkB0Ym5yaXR6ZG9nZS9ldmVudHMiLCJjb2xvciI6LTEwNzMwNzQxNzd9LHsibmFtZSI6Im5hdGl2ZSIsImNvbG9yIjotNzkxODA4MX0seyJuYW1lIjoiZXZlbnRlbWl0dGVyMyIsImNvbG9yIjoxMTYyMTExOX1dLCJwb2ludHMiOlt7Im5hbWUiOiAiZXZlbnRzIiwgInNjb3JlcyI6WzUxMzczMSwxMjcwNjc3LDQ5MTk5MSw0NjAxMTldfV19.png)