# TER Form validation

Validation set for ter-form

# Validations

```
{
    validations: [
        Validation.mandatory({
            key: 'some_key',
            label: 'some_label',
            translate: t,
        })
    ]
}
```

## Mandatory

| Input     | Mandatory | Description                               |
|-----------|-----------|-------------------------------------------|
| key       | Yes       | Key to get data from form                 |
| label     | No        | Label to display in error, default is key |
| translate | No        | Ter-localization variable                 |

## Max

| Input     | Mandatory | Description                               |
|-----------|-----------|-------------------------------------------|
| key       | Yes       | Key to get data from form                 |
| max       | Yes       | Max length allowed                        |
| label     | No        | Label to display in error, default is key |
| translate | No        | Ter-localization variable                 |

## Min

| Input     | Mandatory | Description                               |
|-----------|-----------|-------------------------------------------|
| key       | Yes       | Key to get data from form                 |
| min       | Yes       | Min length allowed                        |
| label     | No        | Label to display in error, default is key |
| translate | No        | Ter-localization variable                 |

## Same

| Input     | Mandatory | Description                               |
|-----------|-----------|-------------------------------------------|
| key1      | Yes       | Key to get data from form to compare      |
| key2      | Yes       | Key to get data from form to compare      |
| label1    | No        | Label to display in error, default is key |
| label2    | No        | Label to display in error, default is key |
| translate | No        | Ter-localization variable                 |