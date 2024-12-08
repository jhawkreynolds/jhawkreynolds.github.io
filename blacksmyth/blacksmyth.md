# Blacksmyth

Blacksmyth is an extension to the Smyth project that supports
finding and resynthesizing library functions in incomplete programs.

Blacksmyth aims to support a library file containing function headings left undefined.
If a target program is found to have used one of the functions within the library,
Blacksmyth will reintroduce the function as a sketch within the code.
Blacksmyth will then call the Smyth toolchain to attempt to repair the program
and render it usable again.

We would like to thank [the original Smyth team](https://github.com/UChicago-PL/smyth)
for the baseline program synthesis tool
and [David Broman](https://github.com/david-broman/ocaml-examples)
for his very helpful tutorials and sample code on lexing and parsing in OCaml.

Further commit history can be found [here](https://github.com/jhawkreynolds/blacksmythparser).

The remainder of this README details installation steps for Smyth.
Installing from this repository requires no further instructions.