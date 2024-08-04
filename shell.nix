with (import <nixpkgs> {});

mkShell {
  name = "blog-nix";
  version = "0.0.1";

  buildInputs = [
    bashInteractive
    nodejs
  ];

  NODE_ENV = "development";

  shellHook = ''
  '';
}

