# benchmarks

Under extremely heavy load with 100 constant listeners @tbnritzdoge/events outperforms any other emitter

```
drip x 513,731 ops/sec ±0.60% (95 runs sampled)
native x 491,991 ops/sec ±0.95% (96 runs sampled)
eventemitter3 x 460,119 ops/sec ±0.17% (96 runs sampled)
@tbnritzdoge/events x 1,270,677 ops/sec ±0.23% (95 runs sampled)
```

![bench](https://edge.doge.bio/bar/eyJ0aXRsZSI6Im9wcy9zIGhpZ2hlciBpcyBiZXR0ZXIiLCJsZWdlbmQiOlt7Im5hbWUiOiJkcmlwIiwiY29sb3IiOi0xMjY4NDA4MzIxfSx7Im5hbWUiOiJAdGJucml0emRvZ2UvZXZlbnRzIiwiY29sb3IiOi0xMDczMDc0MTc3fSx7Im5hbWUiOiJuYXRpdmUiLCJjb2xvciI6LTc5MTgwODF9LHsibmFtZSI6ImV2ZW50ZW1pdHRlcjMiLCJjb2xvciI6MTE2MjExMTl9XSwicG9pbnRzIjpbeyJuYW1lIjogImV2ZW50cyIsICJzY29yZXMiOls1MTM3MzEsMTI3MDY3Nyw0OTE5OTEsNDYwMTE5XX1dfQ==.png)