import { SourceNode } from "source-map";
import * as ts from "typescript";
import * as tstl from "typescript-to-lua";

const REPL_REQUIRE = `
local include, gsub = include, string.gsub --[[ require fix for typescripttolua ]]
local function require(name) return include( gsub(name, "%.", "/" ) .. ".lua") end
`;

class CustomPrinter extends tstl.LuaPrinter {
	protected printFile(file: tstl.File): SourceNode {
		const originalResult = super.printFile(file);
		return this.createSourceNode(file, [`${REPL_REQUIRE}\n`, originalResult]);
	}
}

const plugin: tstl.Plugin = {
	printer: (program: ts.Program, emitHost: tstl.EmitHost, fileName: string, file: tstl.File) =>
		new CustomPrinter(emitHost, program, fileName).print(file),
};

export default plugin;