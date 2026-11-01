---
title: actualpy
date: 2026-11-01
summary: Python API implementation for the Actual Budget server
github:
  repo: bvanelli/actualpy
  shields: [stars, forks, contributors]
  avatars: true
---

actualpy is a Python API implementation for the server of [Actual Budget](https://actualbudget.org/), a
superfast and privacy-focused app for managing your finances.

The library is a re-implementation of the Node.js npm package
[@actual-app/api](https://actualbudget.org/docs/api/), but takes a different, more Pythonic approach: database
objects are handled through the [SQLAlchemy](https://www.sqlalchemy.org/) ORM. This means you can use the full
power of SQLAlchemy to build your own queries, write custom tools to manage your budget, or export your data to
another format. All the useful relationships between the objects are also available to facilitate data handling.

## Installation

```bash
pip install actualpy
```

## Example

The following script downloads a budget and prints every single transaction registered in it:

```python
from actual import Actual
from actual.queries import get_transactions

with Actual(base_url="http://localhost:5006", password="<your_password>", file="<file_id_or_name>") as actual:
    for t in get_transactions(actual.session):
        account_name = t.account.name if t.account else None
        category = t.category.name if t.category else None
        print(t.date, account_name, t.notes, t.amount, category)
```

## Contributing

Ideas, bug fixes and feature requests are welcome: [open an issue](https://github.com/bvanelli/actualpy/issues/new/choose)
or submit a pull request. For questions that don't fit an issue, start a
[discussion](https://github.com/bvanelli/actualpy/discussions/new/choose).

The full guide is in [CONTRIBUTING.md](https://github.com/bvanelli/actualpy/blob/main/CONTRIBUTING.md).

## Learn more

- [Documentation](https://actualpy.readthedocs.io/en/latest/)
- [Examples](https://actualpy.readthedocs.io/en/latest/examples)
- [Package on PyPI](https://pypi.org/project/actualpy/)
