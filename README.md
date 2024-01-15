> Matthew 5
> [43] Ye have heard that it hath been said, Thou shalt love thy neighbour, and hate thine enemy. [44] But I say unto you, Love your enemies, bless them that curse you, do good to them that hate you, and pray for them which despitefully use you, and persecute you; [45] That ye may be the children of your Father which is in heaven: for he maketh his sun to rise on the evil and on the good, and sendeth rain on the just and on the unjust.

# Iterable String
Iterate a string using regular expressions.
Allows you to customize string data formats, allows you to customize ways of reading data saved in a unconventional format.

## Installation
```npm install @belomonte/iterable-string --save```

## Examples

```typescript
impor { IterableString } from '@belomonte/iterable-string';

const uri = 'mailto:me@email.com';
const iterable = new IterableString(uri);
const isMailtoURI = iterable.addCursor(/^mailto:/);

if (isMailtoURI) {
  const anythingButSpaces = /^[^ ]+/;
  const mail = iterable.addCursor(anythingButSpaces);

  openCustomEmailDialog(mail);
}

```

## References
- https://refactoring.guru/pt-br/design-patterns/iterator

## Donate
Help me continue working on tools like this one.
There's still a lot of work to do.

Lighting donate: <a href="lightning:antonioconselheiro@getalby.com">lightning:antonioconselheiro@getalby.com</a>

![zap me](https://raw.githubusercontent.com/antonioconselheiro/antonioconselheiro/main/img/qrcode-wallet-lighting.png)

Bitcoin onchain donate: <a href="bitcoin:bc1qrm99lmmpwk7zsh7njpgthw87yvdm38j2lzpq7q">bc1qrm99lmmpwk7zsh7njpgthw87yvdm38j2lzpq7q</a>

![zap me](https://raw.githubusercontent.com/antonioconselheiro/antonioconselheiro/main/img/qrcode-wallet-bitcoin.png)
