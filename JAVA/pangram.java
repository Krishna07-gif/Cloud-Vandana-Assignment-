import java.util.Scanner;
import java.util.Set;
import java.util.HashSet;

public class pangram {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a sentence: ");
        String input = scanner.nextLine().toLowerCase(); // Convert to lowercase for case-insensitivity

        boolean isPangram = isPangram(input);

        if (isPangram) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }

        scanner.close();
    }

    public static boolean isPangram(String input) {
        Set<Character> letters = new HashSet<>();

        // Iterate through the input string
        for (int i = 0; i < input.length(); i++) {
            char c = input.charAt(i);

            // Check if the character is a letter
            if (Character.isLetter(c)) {
                letters.add(c);
            }
        }

        // Check if the set size is 26 (indicating all letters from 'a' to 'z' are present)
        return letters.size() == 26;
    }
}
