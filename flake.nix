{
  description = "Eleventy blog development environment";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
  };

  outputs = { self, nixpkgs }:
    let
      supportedSystems = [ "x86_64-linux" "aarch64-linux" "aarch64-darwin" ];
      forAllSystems = nixpkgs.lib.genAttrs supportedSystems;
    in
    {
      devShells = forAllSystems (system:
        let
          pkgs = nixpkgs.legacyPackages.${system};
        in
        {
          default = pkgs.mkShell {
            name = "blog-nix";

            packages = with pkgs; [
              bashInteractive
              nodejs
              vale
              vale-ls
            ];

            NODE_ENV = "development";

            shellHook = ''
              export PATH=$PATH:./node_modules/.bin
            '';
          };
        });
    };
}
