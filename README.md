# Shopgate Connect - Products best before dates (shelf life expiration date)

[![GitHub license](http://dmlc.github.io/img/apache2.svg)](LICENSE)

Show best before dates on product details page for simple and product variants.

## Configuration

Set the following values in your Shopgate Connect Admin:
* `bbdProperty` - (string) The property name with BBD date

### Example of configuration

```json
{
    "bbdProperty": "mhd_date"
}
```

## Dependencies
- @shopgate/products-add-properties
    - `addProperties` Add the product property that is configured for this extension.
        - bbdProperty

## About Shopgate

Shopgate is the leading mobile commerce platform.

Shopgate offers everything online retailers need to be successful in mobile. Our leading
software-as-a-service (SaaS) enables online stores to easily create, maintain and optimize native
apps and mobile websites for the iPhone, iPad, Android smartphones and tablets.

## License

This extension is available under the Apache License, Version 2.0.

See the [LICENSE](./LICENSE) file for more information.
