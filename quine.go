package main

import "fmt"

func main() {
	fmt.Printf("%s%#v", s, s)
}

const s = "package main\n\nimport \"fmt\"\n\nfunc main() {\n\tfmt.Printf(\"%s%#v\", s, s)\n}\n\nconst s = "
