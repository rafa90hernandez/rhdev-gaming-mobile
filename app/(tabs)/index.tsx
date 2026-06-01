import { Image } from 'expo-image';
import { Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const portfolioWebsite = {
  title: 'RHDev Gaming Showcase',
  description:
    'Complete web portfolio featuring live demos, screenshots, GitHub repositories and interactive game projects.',
  url: 'https://rafa90hernandez.github.io/rhdev-gaming-showcase/',
};

const projects = [
  {
    title: 'Interactive Casino Wheel',
    description:
      'Spin-the-wheel promotional game with animations, audio effects and prize logic.',
    image: require('../../assets/images/wheel.png'),
    playUrl: 'https://rafa90hernandez.github.io/interactive-casino-wheel/',
    githubUrl: 'https://github.com/rafa90hernandez/interactive-casino-wheel',
  },
  {
    title: 'Digital Scratch Card',
    description:
      'Canvas-based scratch card experience with touch support and reward reveal.',
    image: require('../../assets/images/scratch-card.png'),
    playUrl: 'https://rafa90hernandez.github.io/digital-scratch-card/',
    githubUrl: 'https://github.com/rafa90hernandez/digital-scratch-card',
  },
  {
    title: 'Mystery Box Rewards',
    description:
      'Animated mystery box with random rewards, sound effects and confetti.',
    image: require('../../assets/images/mystery-box.png'),
    playUrl: 'https://rafa90hernandez.github.io/mystery-box-rewards/',
    githubUrl: 'https://github.com/rafa90hernandez/mystery-box-rewards',
  },
  {
    title: 'Irish Bingo Game',
    description:
      'Irish-style bingo game with automatic draws, validation and audio effects.',
    image: require('../../assets/images/bingo.png'),
    playUrl: 'https://rafa90hernandez.github.io/bingo-number-draw/',
    githubUrl: 'https://github.com/rafa90hernandez/bingo-number-draw',
  },
];

export default function HomeScreen() {
  const openLink = async (url: string) => {
    await Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.hero}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
          contentFit="contain"
        />

        <Text style={styles.badge}>
          React Native • Expo • Interactive Portfolio
        </Text>

        <Text style={styles.title}>
          Mobile Game Portfolio
        </Text>

        <Text style={styles.subtitle}>
          A mobile showcase for interactive browser-based games created with HTML,
          CSS and JavaScript, featuring animations, audio effects, responsive UI and game logic.
        </Text>

        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>4</Text>
            <Text style={styles.statLabel}>Published Games</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statNumber}>React Native</Text>
            <Text style={styles.statLabel}>Mobile Development</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statNumber}>GitHub</Text>
            <Text style={styles.statLabel}>5 Repositories</Text>
          </View>
        </View>
      </View>

      <View style={styles.aboutCard}>
        <Text style={styles.aboutTitle}>
          Rafael Hernandez
        </Text>

        <Text style={styles.aboutRole}>
          Fullstack Developer
        </Text>

        <Text style={styles.aboutText}>
          Passionate about building modern web and mobile applications using
          JavaScript, TypeScript, React, React Native, Next.js and NestJS.
          Focused on creating intuitive user experiences, scalable solutions
          and interactive digital products.
        </Text>
      </View>

      <View style={styles.websiteCard}>
        <Text style={styles.websiteIcon}>🌐</Text>

        <Text style={styles.websiteTitle}>
          {portfolioWebsite.title}
        </Text>

        <Text style={styles.websiteDescription}>
          {portfolioWebsite.description}
        </Text>

        <TouchableOpacity
          style={styles.fullButton}
          onPress={() => openLink(portfolioWebsite.url)}
        >
          <Text style={styles.fullButtonText}>
            Open Portfolio Website
          </Text>
        </TouchableOpacity>
      </View>

      {projects.map((project) => (
        <View key={project.title} style={styles.card}>
          <Image
            source={project.image}
            style={styles.projectImage}
            contentFit="contain"
          />

          <Text style={styles.cardTitle}>
            {project.title}
          </Text>

          <Text style={styles.cardDescription}>
            {project.description}
          </Text>

          <View style={styles.actions}>
            <TouchableOpacity
              style={styles.primaryButton}
              onPress={() => openLink(project.playUrl)}
            >
              <Text style={styles.primaryButtonText}>
                Play Demo
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.secondaryButton}
              onPress={() => openLink(project.githubUrl)}
            >
              <Text style={styles.secondaryButtonText}>
                GitHub
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}

      <Text style={styles.footer}>
        Rafael Hernandez • Fullstack Developer
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050505',
  },

  content: {
    padding: 20,
    paddingBottom: 40,
  },

  hero: {
    marginTop: 30,
    marginBottom: 24,
    alignItems: 'center',
    backgroundColor: '#0b0b0b',
    borderWidth: 1,
    borderColor: 'rgba(57,255,20,0.28)',
    borderRadius: 28,
    padding: 22,
  },

  logo: {
    width: 220,
    height: 120,
    marginBottom: 16,
  },

  badge: {
    color: '#39ff14',
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 1,
    textAlign: 'center',
    marginBottom: 14,
  },

  title: {
    color: '#ffffff',
    fontSize: 34,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 15,
  },

  subtitle: {
    color: '#cccccc',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 24,
  },

  statsContainer: {
    width: '100%',
    flexDirection: 'row',
    gap: 10,
    marginTop: 24,
  },

  statCard: {
    flex: 1,
    backgroundColor: '#111111',
    borderWidth: 1,
    borderColor: 'rgba(57,255,20,0.28)',
    borderRadius: 18,
    paddingVertical: 16,
    paddingHorizontal: 8,
    alignItems: 'center',
  },

  statNumber: {
    color: '#39ff14',
    fontSize: 16,
    fontWeight: '900',
    marginBottom: 6,
    textAlign: 'center',
  },

  statLabel: {
    color: '#aaaaaa',
    fontSize: 12,
    textAlign: 'center',
  },

  aboutCard: {
    backgroundColor: '#0b0b0b',
    borderRadius: 22,
    borderWidth: 1,
    borderColor: 'rgba(57,255,20,0.25)',
    padding: 22,
    marginBottom: 24,
  },

  aboutTitle: {
    color: '#39ff14',
    fontSize: 24,
    fontWeight: '900',
    marginBottom: 6,
  },

  aboutRole: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
  },

  aboutText: {
    color: '#cccccc',
    lineHeight: 24,
    fontSize: 15,
  },

  websiteCard: {
    backgroundColor: '#0b0b0b',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(57,255,20,0.35)',
    padding: 22,
    marginBottom: 24,
  },

  websiteIcon: {
    fontSize: 34,
    marginBottom: 12,
  },

  websiteTitle: {
    color: '#39ff14',
    fontSize: 23,
    fontWeight: '900',
    marginBottom: 10,
  },

  websiteDescription: {
    color: '#cccccc',
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 18,
  },

  fullButton: {
    backgroundColor: '#39ff14',
    paddingVertical: 15,
    borderRadius: 999,
    alignItems: 'center',
  },

  fullButtonText: {
    color: '#111111',
    fontWeight: '900',
  },

  card: {
    backgroundColor: '#111111',
    borderRadius: 22,
    padding: 18,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'rgba(57,255,20,0.35)',
  },

  projectImage: {
    width: '100%',
    height: 170,
    backgroundColor: '#050505',
    borderRadius: 16,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: 'rgba(57,255,20,0.25)',
  },

  cardTitle: {
    color: '#39ff14',
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 10,
  },

  cardDescription: {
    color: '#cccccc',
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 18,
  },

  actions: {
    flexDirection: 'row',
    gap: 12,
  },

  primaryButton: {
    flex: 1,
    backgroundColor: '#39ff14',
    paddingVertical: 14,
    borderRadius: 999,
    alignItems: 'center',
  },

  primaryButtonText: {
    color: '#111111',
    fontWeight: '800',
  },

  secondaryButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#39ff14',
    paddingVertical: 14,
    borderRadius: 999,
    alignItems: 'center',
  },

  secondaryButtonText: {
    color: '#39ff14',
    fontWeight: '800',
  },

  footer: {
    textAlign: 'center',
    color: '#777777',
    marginTop: 15,
    marginBottom: 20,
  },
});