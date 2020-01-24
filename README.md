A sample grouping of projects to test [Orsa's](https://github.com/orsa-actual/orsa) scanning behavior.

To try it out

```
npx degit git@github.com:orsa-actual/orsa-simple-sample.git
npx orsa scan
npx orsa serve
```

From the GraphQL UI you can run queries like this.

To get a list of all of the projects scanned:

```
{
  projects {
    id
    name
    version
  }
}
```

To get a list of all the uses of the `Button` component:

```
{
  featureSearch(type: "jsx-usage", name: "Button") {
    file {
      name
      project {
        name
      }
    }
    snippet
  }
}
```
